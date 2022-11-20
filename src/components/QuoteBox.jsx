import QuoteButton from "./QueteButton"

const QuoteBox=({quote, getNewValues, backgroundObjet, colorObject}) => {
    return(
        <article className="quoteBox">
            <p style={colorObject} align="center"><i style={colorObject} className='bx bxs-quote-alt-left'>
                </i> {quote.quote}</p>
            <h4 style={colorObject} align="right">{quote.author}</h4>
            <section className="quoteBox-footer">
                <QuoteButton getNewValues={getNewValues} backgroundObjet={backgroundObjet}></QuoteButton> 
            </section>


        </article>
    )
}
export default QuoteBox