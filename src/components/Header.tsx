interface Props {
  title: string;
  color?: string;
}

function Header(props: Props) {
  const { title } = props;

  return <header className="header">
    <div className="container-header">
      {title}
    </div>
  </header>
}

export default Header;