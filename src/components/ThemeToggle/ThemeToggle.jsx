const ThemeToggle = (props) => {

  const changeTheme = () => {
    if (props.theme) {
      localStorage.setItem('LOCAL_THEME', 'light');
    } else {
      localStorage.setItem('LOCAL_THEME', 'dark');
    }
  }

  return (
    <>
      <p className="mt-4 px-3" style={{ color: 'white', fontSize: '0.75rem' }}>{props.theme ? 'Light' : 'Dark'}</p>
      <label className="px-3 mt-4 switch">
        <input onChange={changeTheme} type="checkbox" />
        <span className="theslider"></span>
      </label>
    </>
  )
}

export default ThemeToggle;