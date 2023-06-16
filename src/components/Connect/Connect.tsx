import { BaseError } from 'viem'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

import styles from './Connect.module.css';

export function Connect({onPress}) {
  const { connector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { disconnect } = useDisconnect()

  return (
    <div className={styles.container}>
      {isConnected ? (
        <button className={styles.btn} onClick={() => {
          disconnect();
          onPress();
        }}>
          Disconnect
        </button>
      ) : (
        connectors
          .filter((x) => x.ready && x.id !== connector?.id)
          .map((x) => (
            <button className={styles.btn} key={x.id} onClick={() => {
              connect({ connector: x });
              onPress();
            }}>
              {x.name}
              {isLoading && x.id === pendingConnector?.id && ' (connecting)'}
            </button>
          ))
      )}
    </div>
  );
};
