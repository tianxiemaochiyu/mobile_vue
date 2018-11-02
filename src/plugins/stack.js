class Stack {
    constructor(){
        this.state = []
    }
    go(path, ownerPath){
        if(!ownerPath){
            this.state.push(path)
            return
        }
        let index = this.state.findIndex( v => v === path)
        let ownerIndex = this.state.findIndex( v => v === ownerPath)
        if(ownerIndex < 0){
            this.state.push(ownerPath)
        }
        if(index < 0){
            this.state.push(path)
        }
    }
    findFlag(path){
        let index = this.state.findIndex( v => v === path)
        if(index >=0 && index < this.state.length - 1){
            return 'right'
        }else if(index >=0 && index == this.state.length - 1){
            return 'left'
        }else {
            return 'none'
        }
    }
    pop(path){
        let index = this.state.findIndex( v => v === path)
        this.state.pop()
        if(index >= 0)
        this.state.push(this.state.splice(index, 1)[0])
    }
}

export default Stack