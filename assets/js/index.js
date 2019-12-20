'use strict';

class Messenger {
  constructor (user) {
    this._user=user;
  }
  
  
}

class Chat{
  constructor (id) {
    this._messages=[
      {
        value: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ' +
               'Aenean commodo ligula eget dolor. Aenean massa. ' +
               'Cum sociis natoque penatibus et magnis dis parturient montes, ' +
               'nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
        time: '20-12-2019 16-17'
      }

    ];
    console.log( this._messages[0]);
    this.participants=[];
  }
  
  get messages(){
    return this._messages;
  }
  loadMessages(){
           
    this.messages.push();
  }
  
  render(){
    const ul = document.createElement('ul'); 
    ul.setAttribute('id', 'messagesList');

    this.messages.forEach(
      (message) => {
    ul.prepend(new Message(...message).render() );    
      }
    );
    
    return ul;
  }

}


class Message {
  /**
   *
   * @param {string} value
   * @param {User} author
   * @param {Date} date
   */
  

  constructor (value, author, date) {
    this._value = value;
    this._author = author;
    this._date = date;
  
  }
  
  render () {
    const li = document.createElement('li');
    li.classList.add('message');
  }
}

class User {
  

  constructor (name, surname, avatar) {
    this._value = value;
    this._author = author;
    this._date = date;
}
}

const firstChat = new Chat(0);
firstChat.render();

//chat.render();