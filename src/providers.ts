import metamaskImage from "./images/providers/metamask.png";
import walletconnectImage from "./images/providers/walletConnectIcon.svg";
import portisImage from "./images/providers/portisIcon.png";
import fortmaticImage from "./images/providers/fortmaticIcon.png";
import ledgerImage from "./images/providers/ledger.png";
import trezorImage from "./images/providers/trezor.png";
import {fortmatic, injected, ledger, portis, trezor, walletconnect} from "./connectors";

const providers: any = [
    {
        name: "Metamask",
        logo: metamaskImage,
        connector: injected
    },
    {
        name: "Wallet Connect",
        logo: walletconnectImage,
        connector: walletconnect
    },
    {
        name: "Portis",
        logo: portisImage,
        connector: portis
    },
    {
        name: "Fortmatic",
        logo: fortmaticImage,
        connector: fortmatic
    },
    {
        name: "Ledger",
        logo: ledgerImage,
        connector: ledger
    },
    {
        name: "Trezor",
        logo: trezorImage,
        connector: trezor
    }
]

export default providers;