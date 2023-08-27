<template>
  <div class="createModal">
    <div class="titleArea"><h1>Project create manager</h1></div>
    <div class="inputeArea">
      <div class="inputStyle">
        <div class="inputName">Project Name</div>
        <input class="innerInput" v-model="projectForm.projectName" />
      </div>
      <div class="inputStyle">
        <div class="inputName">Add Member</div>
        <div class="innerDiv">
          <input
            v-model="searchEmailWord"
            @input="emailSearch"
            placeholder="search email"
          />
          <ul>
            <li
              v-for="(searchEmail, emailKey) in searchEmailList"
              :key="emailKey"
              @click="selectEmail(searchEmail)"
            >
              {{ searchEmail }}
            </li>
          </ul>
          <div class="selected-emails">
            <div
              v-for="(selected, index) in selectedEmailList"
              :key="index"
              class="selected-email"
            >
              <div class="emailText">
                {{ selected }}
              </div>
              <button @click="removeSelected(index)" class="remove-button">
                <img src="@/assets/removeIcon.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="inputStyle">
        <div class="inputName">Description</div>
        <input class="innerInput" v-model="projectForm.description" />
      </div>
      <div class="submitStyle">
        <div class="cancel" @click="closeModal">Cancel</div>
        <div class="create" @click="createProject">Create</div>
      </div>
    </div>
  </div>
</template>
<script>
import { debounce } from "lodash";
import { mapActions } from "vuex";
import mixins from "@/mixins";

export default {
  emits: ["close-modal"],
  mixins: [mixins],

  methods: {
    ...mapActions("project", ["$emailSearch", "$createProject"]),
    closeModal() {
      this.$emit("close-modal");
    },
    async createProject() {
      if (!this.projectForm.projectName.trim()) {
        alert("project name은 필수 입니다.");
        return;
      }

      let params = new Object();
      params.projectName = this.projectForm.projectName;
      params.emailList = this.selectedEmailList;
      params.description = this.projectForm.description;

      this.projectForm = Object.assign({}, this.initialProjectForm);
      this.$debugLog("CreateModal", params);
      const payload = {
        url: "/project/createProject",
        params: params,
      };
      const result = await this.$createProject(payload);
      if (result.success) {
        this.$debugLog("CreateModal", result.data);
        alert(this.projectForm.projectName, "프로젝트가 생성되었습니다.");
      } else {
        this.$debugLog("CreateModal", result.errorMessage);
        alert(this.projectForm.projectName, "프로젝트가 생성을 실패했습니다.");
      }
      this.closeModal();
    },
    selectEmail(selectEmail) {
      if (!this.selectedEmailList.includes(selectEmail)) {
        this.selectedEmailList.push(selectEmail);
      }
      this.searchEmailList = [];
    },
    removeSelected(index) {
      this.selectedEmailList.splice(index, 1);
    },
    emailSearch: debounce(
      async function () {
        let params = new Object();
        params.searchEmailWord = this.searchEmailWord;
        const payload = {
          url: "/project/emailSearch",
          params: params,
        };
        this.$debugLog("CreateModal", params);
        const result = await this.$emailSearch(payload);
        this.searchEmailList = result;
        this.searchEmailWord = "";
        if (result.success) {
          this.searchEmailList = result.data;
          this.$debugLog("CreateModal", result.data);
          return;
        } else {
          this.$debugLog("CreateModal", result.errorMessage);
          return;
        }
      },
      300,
      { leading: false, trailing: true }
    ),
  },
  data() {
    return {
      selectedEmailList: [],
      searchEmailWord: "",
      searchEmailList: [],
      buttonDisabled: true,
      projectForm: {
        projectName: "",
        members: [],
        description: "",
      },
      initialProjectForm: {
        projectName: "",
        members: [],
        description: "",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.createModal {
  z-index: 11;
  position: fixed;
  top: 12rem;
  width: 45rem;
  margin: auto;
  background: rgb(200, 200, 200);
  display: flex;
  flex-direction: column;
  border-radius: 9px;
}
.titleArea {
  margin: 0.5rem auto 1rem;
}

.inputStyle {
  display: flex;
  min-height: 3rem;
  margin: 0 0 3rem 2.5rem;

  font-size: 1.25rem;

  .inputName {
    width: 8rem;
  }
}
.innerDiv {
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 3rem;

  input {
    all: unset;
    background: white;
    height: 3rem;
    border-radius: 5px;
    padding-left: 1.25rem;
    width: 28.86rem;
  }
  ul,
  li {
    all: unset;
  }
  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 16.5rem;
    background: white;
    border-radius: 5px;
    width: 30.125rem;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 0.5rem;
    z-index: 11;
  }
  li {
    padding-left: 1.25rem;
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }
  li:hover {
    color: black;
  }
}
.innerInput {
  all: unset;
  background: white;
  width: 85%;
  height: 3rem;
  margin: 0 3rem;
  border-radius: 5px;
  padding-left: 1.25rem;
}
.submitStyle {
  display: flex;
  width: 100%;
  position: relative;
  top: -1rem;
  justify-content: flex-end;
  .create,
  .cancel {
    background: #a29bfe;
    width: 10rem;
    height: 2.5rem;
    margin: 0 3rem 1rem 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 7px;
    letter-spacing: 4px;
    cursor: pointer;
  }
  .cancel {
    background: green;
  }
  div:hover {
    opacity: 0.7;
  }
}
.selected-emails {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
  background: white;
  border-radius: 7px;
  padding-left: 1.25rem;
  .selected-email {
    margin: 0.5rem;
    font-size: 1rem;
    color: black;
    background: #c8c8c8;
    /* background: blue; */
    border-radius: 5px;
    display: flex;
    opacity: 0.9;
  }
}
.remove-button {
  all: unset;
  img {
    width: 0.75rem;
  }
  margin-right: 0.5rem;
}
.emailText {
  max-width: 7.75rem;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0.25rem;
  color: rgba(0, 0, 0, 0.9);
}
</style>
