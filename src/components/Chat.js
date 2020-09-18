import { Avatar, IconButton } from '@material-ui/core';
import { InsertEmoticon, SearchOutlined } from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { seed } from 'react';
import '../css_components/Chat.css';

function Chat() {
    
    return (
        <div className="Chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
                <div className="chat__info">
                    <h2>Nom de la salle</h2>
                    <p>Dernier message...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                
                <p className="chat__message chat__reciever">
                <span className="chat__name">xavier</span> 
                hello world !!
                </p>
                
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon /> 
                </IconButton>
                <form>
                    <input placeholder="Ecrire votre message ici" type="text" />
                    <button>Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default Chat
