import React, { useEffect, useState } from 'react'
import {
    AlertDialog, 
    AlertDialogTrigger, 
    AlertDialogContent, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';
import { Token } from '@/lib/types';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';
import { LoaderCircleIcon } from 'lucide-react';

interface TransferTokenComponentProp {
    token: Token;
    balance: number,
    type: 'eth' | 'token'
}

export default function TransferTokenComponent({
    token, 
    type = "eth",
    balance
}: TransferTokenComponentProp) {
    
    const [amountToTransfer, setAmountToTransfer] = useState<number>();
    const [recipient, setRecipient] = useState<`0x${string}`>();
    const [isSwapping, setIsSwapping] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        console.log("Balance ::: ", balance)
        setAmountToTransfer(balance)
    }, [])

    const transfer = async () => {
        try {
            if (!amountToTransfer) {
                toast.error('Please provide a valid amount to sell')
                return;
            }
            setIsSwapping(true);
            toast.info(`Transferring ${amountToTransfer} ${token.symbol} to ${recipient}`)
            const response = await fetch(`/api/tokens/${token.address}/transfer`, {
                method: 'POST',
                body: JSON.stringify({
                    'tokenAddress': token.address,
                    'amount': amountToTransfer,
                    'recipient': recipient,
                    'fid': user.fid
                })
            });

            if (response.status != 200) {
                toast.error(`Swap failed...`);
                return;
            }
            
            await response.json();

            toast.success(`Transfer successful...`);

            setIsOpen(false); // Close the dialog on success

        } catch (error) {
            console.log("CatchError ::: ", error)
            toast.error(`Transfer failed: ${error}`)
        } finally {
            setIsSwapping(false);
        }
    }
    
    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
            <Button variant="default">Transfer</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Transfer {token.symbol}</AlertDialogTitle>
                <AlertDialogDescription>
                    Enter the quantity of {type} you want to transfer.
                </AlertDialogDescription>
            </AlertDialogHeader>


            <div className='space-y-2'>
                <Label>Amount</Label>
                <Input disabled={isSwapping} type='number' onChange={(e) => setAmountToTransfer(Number(e.target.value))} value={amountToTransfer} max={balance}/>
            </div>

            <div className='space-y-2'>
                <Label>Recipient</Label>
                <Input disabled={isSwapping} type='text' onChange={(e) => setRecipient((e.target.value) as `0x${string}`)} value={recipient}/>
            </div>

            <AlertDialogFooter>
                <AlertDialogCancel disabled={isSwapping}>{isSwapping ? 'Cancel' : 'Close'}</AlertDialogCancel>
                <Button disabled={isSwapping} onClick={transfer}>
                    {isSwapping ? <LoaderCircleIcon /> : "Transfer"}
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    )
}
