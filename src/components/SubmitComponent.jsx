import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {CenterGrid,GridItem,CenterRowGrid} from './GridItem';
import { addTransaction } from '../data/Transactions';
const SubmitButton = (props)=>(
    <Button variant='contained' size='large'   {...props}>
        Send
    </Button>
);

function SubmitComponent(props){

    let [keyFieldValue, stateKeyFieldValue] = useState('');
    let [recieverTextField,stateRecieverTextField] =  useState('');
    let [dataTextField,stateDataTextFieldValue]=useState('');
    let [amountTextField,stateAmountTextField] =  useState(null);

    return(
    <CenterGrid>
        <GridItem >
            <TextField
                label="Reciever Address"
                placeholder="0x9143..."
                onChange={(e) => {
                    stateRecieverTextField(e.target.value);
                }}
            />
                </GridItem>
                    <GridItem >
                        <TextField
                        label="Amount"
                        placeholder="1 ETH"
                        onChange={(e) => {
                            stateAmountTextField(e.target.value);
                        }}
                />
        </GridItem>
        <GridItem>
            <TextField
                label="Data"
                placeholder="Fire up!!"
                onChange={(e) => {
                    stateDataTextFieldValue(e.target.value);
                }}
            />
        </GridItem>  
        <GridItem>
            <TextField
                label="Key"
                placeholder="A Lock needs a key"
                onChange={(e) => {
                    stateKeyFieldValue(e.target.value);
                }}
            />
        </GridItem>  
        <GridItem>
            <SubmitButton onClick={()=>{
                if(keyFieldValue==''||recieverTextField==''||dataTextField==''||amountTextField==null){

                }else{
                    addTransaction(recieverTextField,amountTextField,dataTextField,keyFieldValue);
                }
            }} />
        </GridItem>
    </CenterGrid>
    );
}
export default SubmitComponent;