<template>
  <div class="createModal">
    <div class="titleArea"><h1>Issue Create</h1></div>
    <div class="inputeArea">
      <div class="inputStyle">
        <div class="inputName">Issue Name</div>
        <input v-model="issueForm.issueName" />
      </div>
      <div class="inputStyle">
        <div class="inputName">Content</div>
        <input v-model="issueForm.content" />
      </div>
      <div class="inputStyle">
        <div class="inputName">Assignee</div>
        <div class="innerDiv">
          <input
            v-model="searchAssignee"
            @input="assigneeSearch"
            placeholder="search assignee"
          />
          <ul>
            <li
              v-for="(assignee, index) in searchAssigneeList"
              :key="index"
              @click="selectAssignee(assignee)"
            >
              {{ assignee }}
            </li>
          </ul>
          <div class="selected-emails">
            <div
              v-for="(selected, index) in selectedAssigneeList"
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
      <div class="inputStyle imgStyle">
        <div class="inputName">Priority</div>
        <select v-model="issueForm.priority">
          <option value="T">T</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <!-- <img src="@/assets/doubledown.png" class="imgDropDown" @click="" /> -->
      </div>
      <div class="submitStyle">
        <div class="cancel" @click="closeModal">Cancel</div>
        <div class="create" @click="createIssue">Create</div>
      </div>
    </div>
  </div>
</template>
<script>
import { debounce } from "lodash";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("project", ["$assigneeSearch", "$createIssue"]),
    closeModal() {
      this.$emit("close-modal");
    },
    selectAssignee(assignee) {
      if (!this.selectedAssigneeList.includes(assignee)) {
        this.selectedAssigneeList.push(assignee);
      }
      this.searchAssigneeList = [];
    },
    assigneeSearch: debounce(
      async function () {
        let params = new Object();
        params.searchAssignee = this.searchAssignee;
        const payload = {
          url: "/project/assigneeSearch",
          params: params,
        };
        this.$debugLog("IssueModal", params);
        const result = await this.$assigneeSearch(payload);
        this.searchAssignee = "";
        if (result.success) {
          this.searchAssigneeList = result.data;
          this.$debugLog("IssueModal", result.data);
          return;
        } else {
          this.$debugLog("IssueModal", result.errorMessage);
          return;
        }
      },
      300,
      { leading: false, trailing: true }
    ),
    async createIssue() {
      if (!this.issueForm.issueName.trim()) {
        alert("issue name은 필수 입니다.");
        return;
      }

      if (!this.issueForm.content.trim()) {
        alert("issue content는 필수 입니다.");
        return;
      }

      let params = new Object();
      params.issueName = this.issueForm.issueName;
      params.content = this.issueForm.content;
      params.assignees = this.selectedAssigneeList;
      params.priority = this.issueForm.priority;

      this.issueForm = Object.assign({}, this.initialIssueForm);
      this.$debugLog("IssuModal", params);
      const payload = {
        url: "/project/createIssue",
        params: params,
      };
      const result = await this.$createIssue(payload);
      if (result.success) {
        this.$debugLog("IssuModal", result.data);
        alert(this.issueForm.issueName, "프로젝트가 생성되었습니다.");
      } else {
        this.$debugLog("IssuModal", result.errorMessage);
        alert(this.issueForm.issueName, "프로젝트가 생성을 실패했습니다.");
      }
      this.closeModal();
    },
  },
  data() {
    return {
      searchAssigneeList: [],
      selectedAssigneeList: [],
      searchAssignee: "",
      issueForm: {
        issueName: "",
        content: "",
        assignees: [],
        selectedPriority: "",
      },
      initialIssueForm: {
        issueName: "",
        content: "",
        assignees: [],
        selectedPriority: "",
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
  background: #fff8e7;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
}
.titleArea {
  margin: 0.5rem auto 1rem;
}
.inputStyle {
  display: flex;
  height: 3rem;
  margin: 0 0 3rem 2.5rem;
  align-items: center;
  font-size: 1.25rem;
  input {
    all: unset;
    background: white;
    width: 85%;
    height: 3rem;
    margin: 0 3rem;
    border-radius: 5px;
    padding-left: 1.25rem;
  }
  select {
    background: white;
    border: none;
    width: 85%;
    height: 3rem;
    margin: 0 3rem;
    border-radius: 5px;
    padding-left: 1.25rem;
    option {
      margin: 0.5rem;
      height: 1rem;
    }
  }
  select:focus {
    outline: none;
  }
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
    top: 22.75rem;
    background: white;
    border-radius: 5px;
    width: 30.2rem;
    color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  li {
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }
  li:hover {
    color: black;
  }
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
.imgDropDown {
  position: absolute;
  top: 50%;
  right: 3.75rem; /* 이미지 우측 여백 조절 */
  transform: translateY(-50%);
  width: 1.25rem; /* 이미지 너비 조절 */
  height: 1.25rem; /* 이미지 높이 조절 */
  cursor: pointer;
}
.imgStyle {
  position: relative;
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
    background: #fff8e7;
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
