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
import { useProfileProvider } from '@/providers/ProfileProvider';
import { LoaderCircleIcon } from 'lucide-react';

interface BuyTokenComponentProp {
    token: Token;
    balance: number
}

export default function BuyTokenComponent({
    token, 
    balance
}: BuyTokenComponentProp) {
    
    const [amountToBuy, setAmountToBuy] = useState<number>();
    const [isSwapping, setIsSwapping] = useState<boolean>(false);
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const { user } = useAuth();
    const { refreshUser } = useProfileProvider();

    useEffect(() => {
        // console.log("Balance ::: ", balance)
        setAmountToBuy(balance)
    }, [])

    const buyToken = async () => {
        try {
            if (!amountToBuy) {
                toast.error('Please provide a valid amount to buy')
                return;
            }
            setIsSwapping(true);
            toast.info(`Swapping ${amountToBuy} ETH to ${token.symbol}`)
            const response = await fetch(`/api/tokens/${token.address}/buy`, {
                method: 'POST',
                body: JSON.stringify({
                    'tokenAddress': token.address,
                    'amount': amountToBuy,
                    'fid': user.fid
                })
            });

            if (response.status != 200) {
                toast.error(`Swap failed...`);
                return;
            }

            await refreshUser();
            await response.json();
            setIsOpened(false);

            toast.success(`Swap successful...`);

        } catch (error) {
            console.log("CatchError ::: ", error)
            toast.error(`Swap failed: ${error}`)
        } finally {
            setIsSwapping(false);
        }
    }
    
    return (
        <AlertDialog open={isOpened} onOpenChange={setIsOpened}>
        <AlertDialogTrigger asChild>
            <Button variant="default">Buy</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Buy {token.symbol}</AlertDialogTitle>
                <AlertDialogDescription>
                    Enter the amount of token you want to buy (in ETH).
                </AlertDialogDescription>
            </AlertDialogHeader>


            <div className='space-y-2'>
                <Label>Amount</Label>
                <Input type='number' onChange={(e) => setAmountToBuy(Number(e.target.value))} value={amountToBuy} max={balance}/>
            </div>

            <AlertDialogFooter>
                <AlertDialogCancel disabled={isSwapping}>{isSwapping ? 'Cancel' : 'Close'}</AlertDialogCancel>
                <Button disabled={isSwapping} variant={"default"} onClick={buyToken}>
                    {isSwapping ? <LoaderCircleIcon /> : "Buy"}
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    )
}
