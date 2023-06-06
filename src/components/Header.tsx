import { SlDocs } from "react-icons/sl";

interface Props {
  title: string;
}

function Header(props: Props) {
  const { title } = props;

  return <header className="header">
    <div className="container-header">
          <span>{title}</span>
          <SlDocs />
    </div>
  </header>
}

export default Header;