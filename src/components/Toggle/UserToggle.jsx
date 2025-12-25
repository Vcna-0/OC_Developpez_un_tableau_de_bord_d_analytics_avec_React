import GenericToggle from './GenericToggle'

function UserToggle({ users, currentUserId, onToggle }) {
  return (
    <GenericToggle
      options={users}
      currentValue={currentUserId}
      getValue={(user) => user.id}
      getLabel={(user) => user.userInfos.firstName}
      getKey={(user) => user.id}
      onToggle={onToggle}
    />
  )
}

export default UserToggle
