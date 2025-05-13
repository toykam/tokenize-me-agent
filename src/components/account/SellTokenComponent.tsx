import React, { useEffect, useState } from 'react'
import {
    AlertDialog, 
    AlertDialogTrigger, 
    AlertDialogContent, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel
} from '../ui/alert-dialog';
import { Button } from '../ui/button';
import { Token } from '@/lib/types';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';
import { LoaderCircleIcon } from 'lucide-react';

interface SellTokenComponentProp {
    token: Token;
    balance: number
}

export default function SellTokenComponent({
    token, 
    balance
}: SellTokenComponentProp) {
    
    const [amountToSell, setAmountToSell] = useState<number>();
    const [isSwapping, setIsSwapping] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        // console.log("Balance ::: ", balance)
        setAmountToSell(balance)
    }, [])

    const sellToken = async () => {
        try {
            if (!amountToSell) {
                toast.error('Please provide a valid amount to sell')
                return;
            }
            setIsSwapping(true);
            toast.info(`Swapping ${amountToSell} ${token.symbol}`)
            const response = await fetch(`/api/tokens/${token.address}/sell`, {
                method: 'POST',
                body: JSON.stringify({
                    'tokenAddress': token.address,
                    'amount': amountToSell,
                    'fid': user.fid
                })
            });

            if (response.status != 200) {
                toast.error(`Swap failed...`);
                return;
            }
            await response.json();

            toast.success(`Swap successful...`);

            setIsOpen(false); // Close the dialog on success

        } catch (error) {
            console.log("CatchError ::: ", error)
            toast.error(`Swap failed: ${error}`)
        } finally {
            setIsSwapping(false);
        }
    }
    
    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
            <Button variant="destructive">Sell</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Sell {token.symbol}</AlertDialogTitle>
                <AlertDialogDescription>
                    Enter the quantity of token you want to sell.
                </AlertDialogDescription>
            </AlertDialogHeader>


            <div className='space-y-2'>
                <Label>Amount</Label>
                <Input disabled={isSwapping} type='number' onChange={(e) => setAmountToSell(Number(e.target.value))} value={amountToSell} max={balance}/>
            </div>

            <AlertDialogFooter>
                <AlertDialogCancel disabled={isSwapping}>{isSwapping ? 'Cancel' : 'Close'}</AlertDialogCancel>
                <Button disabled={isSwapping} variant={"destructive"} onClick={sellToken}>
                    {isSwapping ? <LoaderCircleIcon /> : "Sell"}
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    )
}
