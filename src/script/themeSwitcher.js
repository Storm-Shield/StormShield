function changeTheme(color){
  const elemet = document.documentElement;

  elemet.setAttribute('data-theme', color);
}