

export function getCard(index){
  let front = `${process.env.PUBLIC_URL}/images/flashcards/${index}a.jpg`
  let back = `${process.env.PUBLIC_URL}/images/flashcards/${index}b.jpg`
  let audio = `${process.env.PUBLIC_URL}/audio/questions/${index}.mp3`
  return {front, back, audio}
}

export function getSortedCards(){
  let cards = []
  for (let i = 1; i <= 100; i++) {
    cards.push(getCard(i))
  }
  return cards;
}