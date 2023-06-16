import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import cx from 'classnames';

import styles from './Wallet.module.css';
import { Connect } from '../Connect/Connect';

const Wallet = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [account, setAccount] = useState(undefined);
  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      setAccount(address.substring(0, 7) + '...');
    } else {
      setAccount(undefined);
    }
  })

  function handleMenu() {
    setIsMenu(!isMenu);
  }

  return (
    <div className={styles.wrapper}>
      <button className={cx(styles.btn, address && styles.account, isMenu && styles.isMenu)} onClick={handleMenu}>{address ? account : "Connect"}</button>
      {
        isMenu && (
          <div className={styles.menuContainer}>
            <Connect onPress={handleMenu} />
          </div>
        )
      }
    </div>
  );
};

export default Wallet;
