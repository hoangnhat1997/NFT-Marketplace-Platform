"use client";

type ConnectModalProps = {
  closeModal: () => void;
};

const ConnectModal = (props: ConnectModalProps) => {
  return (
    <div className="absolute top-24 right-[160px] flex flex-col items-center justify-center z-30 bg-white p-6 rounded-xl w-80">
      <p className="mb-4 text-xl text-black font-medium">Select a wallet</p>
      <p className="text-xs mb-4 text-center">
        <span className="text-gray-500">
          By connecting your wallet, you agree to our
        </span>
        <span className="text-black"> Terms of Service </span>
        <span className="text-gray-500"> and our </span>
        <span className="text-black"> Privacy Policy </span>
      </p>
      <button
        onClick={() => alert("Connecting to Metamask...")}
        className="mb-2 px-4 py-2 text-white bg-blue-500 rounded w-full"
      >
        MetaMask
      </button>

      <button
        onClick={() => alert("Connecting to Coinbase...")}
        className="mb-2 px-4 py-2 text-white bg-blue-500 rounded w-full"
      >
        Coinbase
      </button>

      <button
        onClick={() => alert("Connecting to other wallet...")}
        className="mb-2 px-4 py-2 text-white bg-blue-500 rounded w-full"
      >
        Connect Wallet
      </button>

      <button
        onClick={props.closeModal}
        className="mt-4 px-4 py-2 text-grey-500 border border-grey-500 rounded w-full text-black"
      >
        Close
      </button>
    </div>
  );
};

export default ConnectModal;
