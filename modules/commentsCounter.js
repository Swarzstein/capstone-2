const commentsCounter = () => {
  const messagesTotal = document.querySelectorAll('.comentsByPokemon');
  const counterMess = messagesTotal.length;
  return counterMess;
};
export default commentsCounter;