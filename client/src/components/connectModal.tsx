"use client";

type ConnectModalProps = {
  closeModal: () => void;
};

const ConnectModal = (props: ConnectModalProps) => {
  return (
    <div className="absolute top-24 right-24 flex items-center justify-center z-30">
      <div className="bg-white p-6 rounded-xl w-64">
        <h2 className="mb-4 text-xl">Connect Wallet</h2>

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
    </div>
  );
};

export default ConnectModal;
