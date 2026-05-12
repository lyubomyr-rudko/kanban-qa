import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{S as n}from"./iframe-ClNMTBOh.js";import{t as r}from"./jsx-runtime-BpX3lQ6F.js";function i({todo:e,isEditing:t,editingText:n,onToggle:r,onStartEditing:i,onEditTextChange:o,onFinishEditing:s,onCancelEditing:c,onDelete:l}){return(0,a.jsxs)(`li`,{className:e.completed?`completed`:``,children:[(0,a.jsxs)(`label`,{className:`check-control`,children:[(0,a.jsx)(`input`,{type:`checkbox`,checked:e.completed,onChange:()=>r(e)}),(0,a.jsx)(`span`,{"aria-hidden":`true`})]}),t?(0,a.jsx)(`input`,{className:`edit-input`,autoFocus:!0,value:n,onBlur:s,onChange:e=>o(e.target.value),onKeyDown:e=>{e.key===`Enter`&&s(),e.key===`Escape`&&c()}}):(0,a.jsx)(`button`,{type:`button`,className:`todo-title`,onClick:()=>i(e),children:e.text}),(0,a.jsx)(`button`,{type:`button`,className:`delete-button`,"aria-label":`Delete ${e.text}`,onClick:()=>l(e.id),children:`x`})]})}var a,o=t((()=>{a=r(),i.__docgenInfo={description:``,methods:[],displayName:`TodoItem`,props:{todo:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
  id: number
  text: string
  completed: boolean
  created_at: string
  updated_at: string
}`,signature:{properties:[{key:`id`,value:{name:`number`,required:!0}},{key:`text`,value:{name:`string`,required:!0}},{key:`completed`,value:{name:`boolean`,required:!0}},{key:`created_at`,value:{name:`string`,required:!0}},{key:`updated_at`,value:{name:`string`,required:!0}}]}},description:``},isEditing:{required:!0,tsType:{name:`boolean`},description:``},editingText:{required:!0,tsType:{name:`string`},description:``},onToggle:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(todo: Todo) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: number
  text: string
  completed: boolean
  created_at: string
  updated_at: string
}`,signature:{properties:[{key:`id`,value:{name:`number`,required:!0}},{key:`text`,value:{name:`string`,required:!0}},{key:`completed`,value:{name:`boolean`,required:!0}},{key:`created_at`,value:{name:`string`,required:!0}},{key:`updated_at`,value:{name:`string`,required:!0}}]}},name:`todo`}],return:{name:`void`}}},description:``},onStartEditing:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(todo: Todo) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: number
  text: string
  completed: boolean
  created_at: string
  updated_at: string
}`,signature:{properties:[{key:`id`,value:{name:`number`,required:!0}},{key:`text`,value:{name:`string`,required:!0}},{key:`completed`,value:{name:`boolean`,required:!0}},{key:`created_at`,value:{name:`string`,required:!0}},{key:`updated_at`,value:{name:`string`,required:!0}}]}},name:`todo`}],return:{name:`void`}}},description:``},onEditTextChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(text: string) => void`,signature:{arguments:[{type:{name:`string`},name:`text`}],return:{name:`void`}}},description:``},onFinishEditing:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onCancelEditing:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onDelete:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(id: number) => void`,signature:{arguments:[{type:{name:`number`},name:`id`}],return:{name:`void`}}},description:``}}}}));function s({initialTodo:e}){let[t,n]=(0,c.useState)(e),[r,a]=(0,c.useState)(null),[o,s]=(0,c.useState)(e.text);return(0,l.jsx)(`ul`,{className:`todo-list`,style:{width:`min(520px, 90vw)`},children:(0,l.jsx)(i,{todo:t,isEditing:r===t.id,editingText:o,onToggle:()=>n(e=>({...e,completed:!e.completed})),onStartEditing:e=>{a(e.id),s(e.text)},onEditTextChange:s,onFinishEditing:()=>{let e=o.trim();if(a(null),e){n(t=>({...t,text:e}));return}s(t.text)},onCancelEditing:()=>{a(null),s(t.text)},onDelete:()=>void 0})})}var c,l,u,d,f,p,m;t((()=>{c=e(n(),1),o(),l=r(),u={id:1,text:`Review pull request feedback`,completed:!1,created_at:`2026-05-11T09:00:00Z`,updated_at:`2026-05-11T09:00:00Z`},d={title:`Components/TodoItem`,component:i},f={render:()=>(0,l.jsx)(s,{initialTodo:u})},p={render:()=>(0,l.jsx)(s,{initialTodo:{...u,completed:!0}})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveTodoItem initialTodo={sampleTodo} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveTodoItem initialTodo={{
    ...sampleTodo,
    completed: true
  }} />
}`,...p.parameters?.docs?.source}}},m=[`Active`,`Completed`]}))();export{f as Active,p as Completed,m as __namedExportsOrder,d as default};