import { Header } from '../Header'

export default function HeaderExample() {
  return <Header onNewQuote={() => console.log('New quote clicked')} />
}
