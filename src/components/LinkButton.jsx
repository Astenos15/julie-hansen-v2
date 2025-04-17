function LinkButton({
  bgColor = "#000",
  borderColor = "#fff",
  color = "inherit",
  children,
  href = "#",
}) {
  const linkBtnStyle = {
    backgroundColor: bgColor,
    border: `1px solid ${borderColor}`,
    color: color,
  };
  return (
    <a className="link-btn" href={href} style={linkBtnStyle}>
      {children}
    </a>
  );
}

export default LinkButton;
