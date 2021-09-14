const Info = (props) => {
    return ( 
    <article>
        {console.log("Namn: " + props.title + " " + props.firstname + " " + props.lastname + ", Klass: " + props.classOption + ", Antal biljetter: " + props.amount)}
    </article> );
}
 
export default Info;