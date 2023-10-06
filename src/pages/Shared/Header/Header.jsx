import moment from 'moment';
const Header = () => {
    return (
        <div className="text-center">
            <img className='mx-auto' src="/src/assets/logo.png" alt="" />
            <p className='py-2'>Journalism Without Fear or Favour</p>
            <p className='text-sm'>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;