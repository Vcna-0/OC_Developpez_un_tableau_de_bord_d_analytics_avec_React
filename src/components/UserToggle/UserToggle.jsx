function UserToggle({ users, currentUserId, onToggle }) {
  return (
    <div style={{
      display: 'inline-flex',
      backgroundColor: '#f0f0f0',
      borderRadius: 25,
      padding: 4,
      gap: 0
    }}>
      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => currentUserId !== user.id && onToggle(user.id)}
          style={{
            padding: '8px 16px',
            fontSize: 14,
            fontWeight: 500,
            border: 'none',
            borderRadius: 20,
            backgroundColor: currentUserId === user.id ? '#E60000' : 'transparent',
            color: currentUserId === user.id ? '#fff' : '#666',
            cursor: currentUserId === user.id ? 'default' : 'pointer',
            transition: 'all 0.3s',
            opacity: currentUserId === user.id ? 1 : 0.7
          }}
        >
          {user.userInfos.firstName}
        </button>
      ))}
    </div>
  );
}

export default UserToggle;
