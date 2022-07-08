import { LightningElement,api } from 'lwc';

export default class Child extends LightningElement {
    @api textMessage;
    @api recordList;
    @api contactRecordsList;
    
}