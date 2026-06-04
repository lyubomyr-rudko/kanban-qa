import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{S as n}from"./iframe-D7DmRnYM.js";import{t as r}from"./jsx-runtime-BpX3lQ6F.js";function i({task:e,projects:t,isEditing:n,editingText:r,editingProjectId:i,onToggle:s,onStartEditing:c,onEditTextChange:l,onEditProjectChange:u,onFinishEditing:d,onCancelEditing:f,onDelete:p,onDragStart:m,onStatusChange:h}){return(0,a.jsxs)(`li`,{className:`task-card${e.completed?` completed`:``}`,draggable:!n,onDragStart:()=>m(e),children:[(0,a.jsxs)(`div`,{className:`task-card-top`,children:[(0,a.jsxs)(`label`,{className:`check-control`,children:[(0,a.jsx)(`input`,{type:`checkbox`,checked:e.completed,onChange:()=>s(e)}),(0,a.jsx)(`span`,{"aria-hidden":`true`})]}),n?(0,a.jsxs)(`div`,{className:`task-edit-form`,children:[(0,a.jsx)(`input`,{className:`edit-input`,autoFocus:!0,value:r,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&d(),e.key===`Escape`&&f()}}),(0,a.jsxs)(`select`,{className:`task-project-select`,"aria-label":`Project for ${e.text}`,value:i,onChange:e=>u(e.target.value),children:[(0,a.jsx)(`option`,{value:``,children:`No project`}),t.map(e=>(0,a.jsx)(`option`,{value:e.id,children:e.title},e.id))]}),(0,a.jsxs)(`div`,{className:`task-edit-actions`,children:[(0,a.jsx)(`button`,{type:`button`,className:`save-button`,onClick:d,children:`Save`}),(0,a.jsx)(`button`,{type:`button`,className:`cancel-button`,onClick:f,children:`Cancel`})]})]}):(0,a.jsx)(`button`,{type:`button`,className:`task-title`,onClick:()=>c(e),children:e.text}),(0,a.jsx)(`button`,{type:`button`,className:`delete-button`,"aria-label":`Delete ${e.text}`,onClick:()=>p(e.id),children:`x`})]}),!n&&(0,a.jsxs)(`div`,{className:`task-card-footer`,children:[(0,a.jsx)(`select`,{className:`task-status-select`,"aria-label":`Status for ${e.text}`,value:e.status,onChange:t=>h(e,t.target.value),children:o.map(e=>(0,a.jsx)(`option`,{value:e.value,children:e.label},e.value))}),(0,a.jsx)(`span`,{className:`task-project-label`,children:e.project_title??`No project`})]})]})}var a,o,s=t((()=>{a=r(),o=[{value:`todo`,label:`To do`},{value:`in_progress`,label:`In progress`},{value:`done`,label:`Done`}],i.__docgenInfo={description:``,methods:[],displayName:`TaskItem`,props:{task:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
  id: number;
  project_id: number | null;
  project_title: string | null;
  text: string;
  status: TaskStatus;
  completed: boolean;
  created_at: string;
  updated_at: string;
}`,signature:{properties:[{key:`id`,value:{name:`number`,required:!0}},{key:`project_id`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!0}},{key:`project_title`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!0}},{key:`text`,value:{name:`string`,required:!0}},{key:`status`,value:{name:`union`,raw:`"todo" | "in_progress" | "done"`,elements:[{name:`literal`,value:`"todo"`},{name:`literal`,value:`"in_progress"`},{name:`literal`,value:`"done"`}],required:!0}},{key:`completed`,value:{name:`boolean`,required:!0}},{key:`created_at`,value:{name:`string`,required:!0}},{key:`updated_at`,value:{name:`string`,required:!0}}]}},description:``},projects:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: number;
  title: string;
  description: string;
}`,signature:{properties:[{key:`id`,value:{name:`number`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!0}}]}}],raw:`Project[]`},description:``},isEditing:{required:!0,tsType:{name:`boolean`},description:``},editingText:{required:!0,tsType:{name:`string`},description:``},editingProjectId:{required:!0,tsType:{name:`string`},description:``},onToggle:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(task: Task) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: number;
  project_id: number | null;
  project_title: string | null;
  text: string;
  status: TaskStatus;
  completed: boolean;
  created_at: string;
  updated_at: string;
}`,signature:{properties:[{key:`id`,value:{name:`number`,required:!0}},{key:`project_id`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!0}},{key:`project_title`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!0}},{key:`text`,value:{name:`string`,required:!0}},{key:`status`,value:{name:`union`,raw:`"todo" | "in_progress" | "done"`,elements:[{name:`literal`,value:`"todo"`},{name:`literal`,value:`"in_progress"`},{name:`literal`,value:`"done"`}],required:!0}},{key:`completed`,value:{name:`boolean`,required:!0}},{key:`created_at`,value:{name:`string`,required:!0}},{key:`updated_at`,value:{name:`string`,required:!0}}]}},name:`task`}],return:{name:`void`}}},description:``},onStartEditing:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(task: Task) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: number;
  project_id: number | null;
  project_title: string | null;
  text: string;
  status: TaskStatus;
  completed: boolean;
  created_at: string;
  updated_at: string;
}`,signature:{properties:[{key:`id`,value:{name:`number`,required:!0}},{key:`project_id`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!0}},{key:`project_title`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!0}},{key:`text`,value:{name:`string`,required:!0}},{key:`status`,value:{name:`union`,raw:`"todo" | "in_progress" | "done"`,elements:[{name:`literal`,value:`"todo"`},{name:`literal`,value:`"in_progress"`},{name:`literal`,value:`"done"`}],required:!0}},{key:`completed`,value:{name:`boolean`,required:!0}},{key:`created_at`,value:{name:`string`,required:!0}},{key:`updated_at`,value:{name:`string`,required:!0}}]}},name:`task`}],return:{name:`void`}}},description:``},onEditTextChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(text: string) => void`,signature:{arguments:[{type:{name:`string`},name:`text`}],return:{name:`void`}}},description:``},onEditProjectChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(projectId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`projectId`}],return:{name:`void`}}},description:``},onFinishEditing:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onCancelEditing:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onDelete:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(id: number) => void`,signature:{arguments:[{type:{name:`number`},name:`id`}],return:{name:`void`}}},description:``},onDragStart:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(task: Task) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: number;
  project_id: number | null;
  project_title: string | null;
  text: string;
  status: TaskStatus;
  completed: boolean;
  created_at: string;
  updated_at: string;
}`,signature:{properties:[{key:`id`,value:{name:`number`,required:!0}},{key:`project_id`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!0}},{key:`project_title`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!0}},{key:`text`,value:{name:`string`,required:!0}},{key:`status`,value:{name:`union`,raw:`"todo" | "in_progress" | "done"`,elements:[{name:`literal`,value:`"todo"`},{name:`literal`,value:`"in_progress"`},{name:`literal`,value:`"done"`}],required:!0}},{key:`completed`,value:{name:`boolean`,required:!0}},{key:`created_at`,value:{name:`string`,required:!0}},{key:`updated_at`,value:{name:`string`,required:!0}}]}},name:`task`}],return:{name:`void`}}},description:``},onStatusChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(task: Task, status: TaskStatus) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: number;
  project_id: number | null;
  project_title: string | null;
  text: string;
  status: TaskStatus;
  completed: boolean;
  created_at: string;
  updated_at: string;
}`,signature:{properties:[{key:`id`,value:{name:`number`,required:!0}},{key:`project_id`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!0}},{key:`project_title`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!0}},{key:`text`,value:{name:`string`,required:!0}},{key:`status`,value:{name:`union`,raw:`"todo" | "in_progress" | "done"`,elements:[{name:`literal`,value:`"todo"`},{name:`literal`,value:`"in_progress"`},{name:`literal`,value:`"done"`}],required:!0}},{key:`completed`,value:{name:`boolean`,required:!0}},{key:`created_at`,value:{name:`string`,required:!0}},{key:`updated_at`,value:{name:`string`,required:!0}}]}},name:`task`},{type:{name:`union`,raw:`"todo" | "in_progress" | "done"`,elements:[{name:`literal`,value:`"todo"`},{name:`literal`,value:`"in_progress"`},{name:`literal`,value:`"done"`}],required:!0},name:`status`}],return:{name:`void`}}},description:``}}}}));function c({initialTask:e}){let[t,n]=(0,l.useState)(e),[r,a]=(0,l.useState)(null),[o,s]=(0,l.useState)(e.text),[c,d]=(0,l.useState)(e.project_id?String(e.project_id):``);return(0,u.jsx)(`ul`,{className:`task-list`,style:{width:`min(520px, 90vw)`},children:(0,u.jsx)(i,{task:t,projects:f,isEditing:r===t.id,editingText:o,editingProjectId:c,onToggle:()=>n(e=>({...e,completed:!e.completed})),onStartEditing:e=>{a(e.id),s(e.text),d(e.project_id?String(e.project_id):``)},onEditTextChange:s,onEditProjectChange:d,onFinishEditing:()=>{let e=o.trim();if(a(null),e){let t=f.find(({id:e})=>String(e)===c);n(n=>({...n,text:e,project_id:t?.id??null,project_title:t?.title??null}));return}s(t.text),d(t.project_id?String(t.project_id):``)},onCancelEditing:()=>{a(null),s(t.text),d(t.project_id?String(t.project_id):``)},onDelete:()=>void 0,onDragStart:()=>void 0,onStatusChange:(e,t)=>n(e=>({...e,status:t}))})})}var l,u,d,f,p,m,h,g;t((()=>{l=e(n(),1),s(),u=r(),d={id:1,project_id:1,project_title:`Roadmap`,text:`Review pull request feedback`,status:`todo`,completed:!1,created_at:`2026-05-11T09:00:00Z`,updated_at:`2026-05-11T09:00:00Z`},f=[{id:1,title:`Roadmap`,description:``},{id:2,title:`Client launch`,description:``}],p={title:`Components/TaskItem`,component:i},m={render:()=>(0,u.jsx)(c,{initialTask:d})},h={render:()=>(0,u.jsx)(c,{initialTask:{...d,completed:!0}})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveTaskItem initialTask={sampleTask} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveTaskItem initialTask={{
    ...sampleTask,
    completed: true
  }} />
}`,...h.parameters?.docs?.source}}},g=[`Active`,`Completed`]}))();export{m as Active,h as Completed,g as __namedExportsOrder,p as default};