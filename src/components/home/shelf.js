import Shelf from "../universal/shelf"

class HomeShelf extends Shelf{
    constructor(){
        super();
    }

    render(){
        return(
            <div className = "shelf shelf--home">
            </div>
        )
    }
}

export default HomeShelf