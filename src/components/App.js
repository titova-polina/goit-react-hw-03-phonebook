import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { GlobalStyle } from './GlobalStyle';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const SavedContacts = localStorage.getItem('contacts');
    if (SavedContacts) {
      this.setState({ contacts: JSON.parse(SavedContacts) });
    }
  }

  changeNameFilter = newName => {
    this.setState({ filter: newName });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleDelete = quizId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(quiz => quiz.id !== quizId),
      };
    });
  };

  addQuiz = newQuiz => {
    const isContactExists = this.state.contacts.find(
      contact =>
        contact.name.toLowerCase() === newQuiz.name.toLowerCase() ||
        contact.number === newQuiz.number
    );

    if (isContactExists) {
      return alert(`${newQuiz.name} is already in contacts`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newQuiz],
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleQuizItems = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <section>
          <h1>Phonebook</h1>
          <Form onAdd={this.addQuiz} />

          <h2>Contacts</h2>
          <Filter value={this.props.value} onChange={this.changeNameFilter} />
          <Contacts contacts={visibleQuizItems} onDelete={this.handleDelete} />
        </section>
        <GlobalStyle />
      </>
    );
  }
}
