import '../../Style/Calendar.css'

const Calendar = () => {    
    return (
        <div className="calendar">
            <p>March</p>
            <table className="table_days">
                <tr>
                    <td className="week">03</td>
                        
                    <div className="day">
                        <td>Mo</td><td>Tu</td><td>We</td><td>Th</td><td>Fr</td><td>Sa</td><td>Su</td>
                    </div>
                </tr>
                <tr>
                    <td className="week">9</td>
                        
                    <div className="days">
                        <td>26</td><td>27</td><td>28</td><td>29</td><td>1</td><td>2</td><td>3</td>
                    </div>
                </tr>
                <tr>
                    <td className="week">10</td>

                    <div className="days">
                        <td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
                    </div>
                </tr>
                <tr>
                    <td className="week">11</td>
                            
                    <div className="days">
                        <td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td>
                    </div>
                </tr>
                <tr>
                    <td className="week">12</td>
                            
                    <div className="days">
                        <td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td>
                    </div>
                </tr>
                <tr>
                    <td className="week">13</td>
                            
                    <div className="days">
                        <td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td>
                    </div>
                </tr>
                <tr>
                    <td className="week">14</td>

                    <div className="days">
                        <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
                    </div>
                </tr>
            </table>
        </div>
    );
}
 
export default Calendar;