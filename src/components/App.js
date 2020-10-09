import React, {Component} from 'react';
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from './Title';
import profile from '../assets/profile.png';

class App extends Component {
    state = {displayBio: false};

    toggleDisplayBio = () =>{
        this.setState({displayBio : !this.state.displayBio});
    }


    render() {
        return (
            <div>
                <img src={profile} alt='profile' className="profile"/>
                <h1>Hello!</h1>
                <p>My name is Arnold.</p>
                <Title />
                <p>I'm always looking forward to learning more and gaining more experience!</p>
                {this.state.displayBio ?
            (<div>
                <p>I live in Nuneaton, and I am learning app development through Udemy courses.</p>
                <p>Most of my experience in programming comes from C# and C++, but I am slowly moving towards JavaScript</p>
                <p>Besides coding, I also love gaming and spending time with friends</p>
                <button className = "button" onClick = {this.toggleDisplayBio}>Show less</button>
            </div>) : (
                <div>
                    <button className = "button" onClick={this.toggleDisplayBio}>Read more</button>
                </div>
                )
            }
            <hr />
            <Projects />
            <hr />
            <SocialProfiles />
            </div>
        )
    }
}

export default App;

