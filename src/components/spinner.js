const Spinner = ({color}) => {
    return ( <div className={`size-6 border-4 ${color??"border-white"} border-t-transparent rounded-full animate-spin`}/> );
}
 
export default Spinner;