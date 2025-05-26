import React from 'react';
import './Bracket.css';

const Bracket: React.FC = () => {
  return (
    <div className='BracketParent'>
      {/* BracketNav: Navbar for bracket sections. */}
      <div className='BracketNav'>
        <nav>
          <ul>
            <li className='BracketNavItem'>
              <span className='BracketNavSectionTitle'>WEST</span>
              <a href='#' className='BracketNavLink'>First Round</a>
            </li>
            <li className='BracketNavItem'>
              <span className='BracketNavSectionTitle'>WEST</span>
              <a href='#' className='BracketNavLink'>Conf. Semifinals</a>
            </li>
            <li className='BracketNavItem'>
              <span className='BracketNavSectionTitle'>WEST</span>
              <a href='#' className='BracketNavLink'>Conf. Finals</a>
            </li>
            <li className='BracketNavItem BracketNavFinals'>
              <a href='#' className='BracketNavLink'>NBA Finals</a>
            </li>
            <li className='BracketNavItem'>
              <span className='BracketNavSectionTitle'>EAST</span>
              <a href='#' className='BracketNavLink'>Conf. Finals</a>
            </li>
            <li className='BracketNavItem'>
              <span className='BracketNavSectionTitle'>EAST</span>
              <a href='#' className='BracketNavLink'>Conf. Semifinals</a>
            </li>
            <li className='BracketNavItem'>
              <span className='BracketNavSectionTitle'>EAST</span>
              <a href='#' className='BracketNavLink'>First Round</a>
            </li>
          </ul>
        </nav>
      </div>

      {/*playoff bracket. */}
      <div className="BracketGrid">
        <div className="WestConf">
          <div className="WFR">

            <div className='matchup-containers'>
              <div id="Thunder" className="grid-item westFR">
                <img src="https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg" alt="Thunder Logo" className="team-logo"/>
                <span>1 Thunder</span>
              </div>
              <div id="Griz" className="grid-item westFR">
                <img src="https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg" alt="Grizzlies Logo" className="team-logo"/>
                <span>8 Grizzlies</span>
              </div>
            </div>

            <div className='matchup-containers'>
              <div id="Nuggets" className="grid-item westFR">
                <img src="https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg" alt="Nuggets Logo" className="team-logo"/>
                <span>4 Nuggets</span>
              </div>
              <div id="Clippers" className="grid-item westFR">
                <img src="https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg" alt="Clippers Logo" className="team-logo"/>
                <span>5 Clippers</span>
              </div>
              </div>

            <div className='matchup-containers'>
              <div id="Laker" className="grid-item westFR">
                <img src="https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" alt="Lakers Logo" className="team-logo"/>
                <span>3 Lakers</span>
              </div>
              <div id="Wolves" className="grid-item westFR">
                <img src="https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg" alt="Timberwolves Logo" className="team-logo"/>
                <span>6 Timberwolves</span>
              </div>
              </div>


            <div className='matchup-containers'>
              <div id="Rockets" className="grid-item westFR">
                <img src="https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg" alt="Rockets Logo" className="team-logo"/>
                <span>2 Rockets</span>
              </div>
              <div id="Warriors" className="grid-item westFR">
                <img src="https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg" alt="Warriors Logo" className="team-logo"/>
                <span>7 Warriors</span>
              </div>
            </div>
            </div>


            <div className="WCSF">

            <div className='matchup-containers'>
              <div id="Thunder" className="grid-item west-wcsf">
                <img src="https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg" alt="Thunder Logo" className="team-logo"/>
                <span>1 Thunder</span>
              </div>
              <div id="Nuggets" className="grid-item west-wcsf">
                <img src="https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg" alt="Nuggets Logo" className="team-logo"/>
                <span>4 Nuggets</span>
              </div>
              </div>


            <div className='matchup-containers'>
              <div id="Wolves" className="grid-item west-wcsf">
                <img src="https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg" alt="Timberwolves Logo" className="team-logo"/>
                <span>6 Timberwolves</span>
              </div>
              <div id="Warriors" className="grid-item west-wcsf">
                <img src="https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg" alt="Warriors Logo" className="team-logo"/>
                <span>7 Warriors</span>
              </div>
            </div>
            </div>

            <div className="WCF">

            <div className='matchup-containers'>
              <div id="Thunder" className="grid-item west-wcf">
                <img src="https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg" alt="Thunder Logo" className="team-logo"/>
                <span>1 Thunder</span>
              </div>
              <div id="Wolves" className="grid-item west-wcf">
                <img src="https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg" alt="Timberwolves Logo" className="team-logo"/>
                <span>6 Timberwolves</span>
              </div>
            </div>
          </div>
        </div>

          <div className="EastConf">
            <div className="ECF">

            <div className='matchup-containers'>
              <div id="Knicks" className="grid-item east-ecf">
                <img src="https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg" alt="Knicks Logo" className="team-logo"/>
                <span>3 Knicks</span>
              </div>
              <div id="Pacers" className="grid-item east-ecf">
                <img src="https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg" alt="Pacers Logo" className="team-logo"/>
                <span>4 Pacers</span>
              </div>
            </div>
            </div>

            <div className="ECSF">

            <div className='matchup-containers'>
              <div id="Cavs" className="grid-item east-ecsf">
                <img src="https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg" alt="Cavaliers Logo" className="team-logo"/>
                <span>1 Cavaliers</span>
              </div>
              <div id="Pacers" className="grid-item east-ecsf">
                <img src="https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg" alt="Pacers Logo" className="team-logo"/>
                <span>4 Pacers</span>
              </div>
            </div>

            <div className='matchup-containers'>
              <div id="Knicks" className="grid-item east-ecsf">
                <img src="https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg" alt="Knicks Logo" className="team-logo"/>
                <span>3 Knicks</span>
              </div>
              <div id="Celtics" className="grid-item east-ecsf">
                <img src="https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg" alt="Celtics Logo" className="team-logo"/>
                <span>2 Celtics</span>
              </div>
            </div>
            </div>


            <div className="EFR">

            <div className='matchup-containers'>
              <div id="Cavs" className="grid-item eastFR">
                <img src="https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg" alt="Cavaliers Logo" className="team-logo"/>
                <span>1 Cavaliers</span>
              </div>
              <div id="Heat" className="grid-item eastFR">
                <img src="https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg" alt="Heat Logo" className="team-logo"/>
                <span>8 Heat</span>
              </div>
              </div>

            <div className='matchup-containers'>
              <div id="Pacers" className="grid-item eastFR">
                <img src="https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg" alt="Pacers Logo" className="team-logo"/>
                <span>4 Pacers</span>
              </div>
              <div id="Bucks" className="grid-item eastFR">
                <img src="https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg" alt="Bucks Logo" className="team-logo"/>
                <span>5 Bucks</span>
              </div>
            </div>

            <div className='matchup-containers'>
              <div id="Knicks" className="grid-item eastFR">
                <img src="https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg" alt="Knicks Logo" className="team-logo"/>
                <span>3 Knicks</span>
              </div>
              <div id="Pistons" className="grid-item eastFR">
                <img src="https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg" alt="Pistons Logo" className="team-logo"/>
                <span>6 Pistons</span>
              </div>
              </div>

            <div className='matchup-containers'>
              <div id="Celtics" className="grid-item eastFR">
                <img src="https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg" alt="Celtics Logo" className="team-logo"/>
                <span>2 Celtics</span>
              </div>
              <div id="Magic" className="grid-item eastFR">
                <img src="https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg" alt="Magic Logo" className="team-logo"/>
                <span>7 Magic</span>
              </div>
            </div>
          </div>
        </div>
      
        <div className="grid-item finals">
          <img src="https://cdn.nba.com/logos/playoffs/2024/L/finals.svg" alt="Finals Logo" className="finals-logo"/>
        </div>
      </div>
    </div>
  );
};

export default Bracket;