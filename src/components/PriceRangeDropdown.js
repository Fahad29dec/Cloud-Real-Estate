import React, { useState, useEffect, useContext } from 'react';

// import icons
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '1000 - 7000',
    },
    {
      value: '7000 - 12000',
    },
    {
      value: '12000 - 22000',
    },
    {
      value: '22000 - 32000',
    },
    {
      value: '32000 - 38000',
    },
    {
      value: '38000 - 50000',
    },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setPrice(price.value)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
