import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = ({date,setDate}) => {

    return (
        <div classNameName="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                    styles={{
                        caption: { color: '#0FCFEC' }
                      }}
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;