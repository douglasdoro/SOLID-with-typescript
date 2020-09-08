import AbstractShareButton from "./AbstractShareButton"; 
import DOMEventHandler from  './DOMEventHandler'; 
import MockEventHandler from  './MockEventHandler'; 

import ShareButtonTwitter from './ShareButtonTwitter'; 
import ShareButtonFacebook from './ShareButtonFacebook'; 
import ShareButtonLinkedin from './ShareButtonLinkedin'; 
import ShareButtonPrint from './ShareButtonPrint'; 

const eventHandler = new DOMEventHandler(); 
const mockEventHandler = new MockEventHandler(); 

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, ".btn-twitter", "https:douglasfontes.com.br"); 
twitter.bind(); 

const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, ".btn-facebook", "https:douglasfontes.com.br"); 
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin(mockEventHandler, ".btn-linkedin", "https:douglasfontes.com.br"); 
linkedin.bind(); 

const print: AbstractShareButton = new ShareButtonPrint(mockEventHandler, ".btn-print", "https:douglasfontes.com.br"); 
print.bind(); 