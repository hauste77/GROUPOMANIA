import { Avatar } from '@material-ui/core';
import React, { useEffect, useState} from 'react';
import '../css_components/SidebarChat.css';

function SidebarChat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000));
      
    }, []);

    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Nom de la salle</h2>
                <p>Dernier message...</p>
            </div>
        </div>
    )
}

export default SidebarChat;
