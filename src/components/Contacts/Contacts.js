import { Item, Btn } from './Contacts.styled';
export const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <Btn onClick={() => onDelete(contact.id)}>Delete</Btn>
          </Item>
        ))}
      </ul>
    </>
  );
};
