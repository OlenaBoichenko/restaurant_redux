import Filter from "./Filter";

function Categories() {
    
    return(
        <div>
            <h1>What kind of food do you like?</h1>
            {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL']
            .map((category, index) => <Filter category={category} key={index}/>)}
        </div>
    )
}

export default Categories;