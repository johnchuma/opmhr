const Spinner = ({color}) => {
    return ( <div className={`h-4 w-4 border-4 ${color??"border-white"} border-t-transparent rounded-full animate-spin`}/> );
}
 
export default Spinner;