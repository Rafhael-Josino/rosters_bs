interface Props {
  title: string;
  color?: string;
}

function Header(props: Props) {
  const { title, color } = props;

  const headerColor = color? color : 'orange';

  return <header className="header" style={{backgroundColor: headerColor}}>
    <div className="container-header">
      {title}
    </div>
  </header>
}

export default Header;