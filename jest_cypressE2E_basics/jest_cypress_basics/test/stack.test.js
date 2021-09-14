// ===== Basics =======
// describe used to define the test suite
// it specifies indidual tests/unit tests aim
// todo specifies that code need to be written to pass these test cases

describe('My Stack',()=>{

    // global object declaration that will be used beforeEach test case it statement
    let stack;
    
    beforeEach(()=>{
        stack = new Stack();
    });
    
    it('is created empty',()=>{
        // the stack top should be -1 for empty stack
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push items to the top',()=>{
        stack.push('🥕');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🥕');
    });

    it('can pop off from top of stack',()=>{
        stack.push('🥕');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🥕');
        expect(stack.pop()).toEqual('🥕');
        expect(stack.top).toBe(-1);
                
    });
});

// code progresses as we want to pass the test cases
class Stack{
    constructor(){
        this.top = -1;
        this.items = {}
    }

    get peek (){
        return this.items[this.top];
    }

    push(value){
        this.top +=1;
        this.items[this.top]= value;
    }

    pop(){
        let popped = this.items[this.top];
        delete this.items[this.top];
        this.top-=1;
        return popped;
        
    }
}