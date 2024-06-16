import '../../Style/Main/StatisticsPane.css'
import ligaImage from '../../Icons/liga.png';

const StatisticsPane = () => {

    const goToWebPage = () => {
        window.open('https://www.flashscore.pl/pilka-nozna/polska/fortuna-1-liga/tabela/#/4W4GHCiR/table/overall', '_blank', 'noopener,noreferrer');
    }
     return (
        <div id="statPane" className='paneShadow' onClick={goToWebPage}>
        </div>
    );
}

export default StatisticsPane