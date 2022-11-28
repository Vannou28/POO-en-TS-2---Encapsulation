import  assert  from  'assert';

class BankCustomer{
    private  name: string;
    private  secretCodeCard: string;


    constructor(name:  string, secretCodeCard:  string) {
        this.name = name;
        this.secretCodeCard = secretCodeCard;
    }  

    public getName(): string {
        return this.name;
    }

    public verifyPinInput(secretCodeImport:string): boolean {
        if(this.secretCodeCard ==  secretCodeImport){
            return true;
        }
        
        return false;
    }

}
// Tests

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
