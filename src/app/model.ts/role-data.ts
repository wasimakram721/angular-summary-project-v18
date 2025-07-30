export const ROLES_COLUMNS = ['roleId', 'roleName', 'description', 'assignedTo', 'status','contextActions'];

export const ROLES_DATA = [
  { roleId: 'R001', roleName: 'Admin', description: 'Full Access', assignedTo: 'John', status: 'Active' ,contextActions:'view' },
  { roleId: 'R002', roleName: 'Viewer', description: 'Read Only', assignedTo: 'Alice', status: 'Inactive',contextActions:'view' },
  { roleId: 'R003', roleName: 'Editor', description: 'Write Only', assignedTo: 'Bob', status: 'Active',contextActions:'view' }
];