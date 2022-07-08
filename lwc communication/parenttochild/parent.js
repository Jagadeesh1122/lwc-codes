import { LightningElement,track} from 'lwc';

export default class Parent extends LightningElement {
     message = 'Parent to child Communication';
     @track reocrdList =[1,2,3,4];
    @track contactsList=[
{id:1,
Name:'Jagadeesh'

},{
    id:2,
    Name:'gaurav'
}



     ];
    
}