type Props = {title: String}

function Header(props: Props) {
    return <header className="header deathguard">
            <div className="container-header">
                <div className="header-left">
                    <div className="header-logo"><img src="Faction Skull.gif" alt="Skull Symbol"/><span className="br-divider vertical mx-half mx-sm-1"></span></div>
                </div>
                <div className="header-bottom">
                    <div className="header-menu">
                      <div className="header-info">
                          <div className="header-title">{props.title}</div>
                      </div>
                    </div>
                </div>
            </div>
      </header>
}

export default Header;