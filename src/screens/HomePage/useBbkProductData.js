import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function useBbkProductData() {
  const [menuList, setMenuList] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const apiUrl =
  //       'https://web-backend.biryanibykilo.com/backend-app/app/api/v1/get_menu_list/31';
  //     const body = {
  //       headers: {
  //         'x-access-token':
  //           'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJmZTI3NDQ2MC1jYzNjLTQ5MTQtOTg2MS1hNjc4OWIwODNhMGQiLCJmaXJzdF9uYW1lIjoiUmFqIHNpbmdoIiwibW9iaWxlIjoiNzkwNjMzODE2NiIsImxvZ2luX2lkIjoiYWU3NzU4Y2UtZTQ5Zi00NDEzLWIyZGQtNWFkOGFmMzVkZTJkIiwic291cmNlIjoid2ViIiwidHMiOiIyMDIyLTA5LTMwIDEwOjMxOjQwIiwiaXNfZ3Vlc3QiOmZhbHNlLCJkZXZpY2VfaWQiOiI0ODFlZmExZjgyZWRjMGZhMGRlZmUxN2ZiZWJhZjQ0YiJ9.YaNYzrGDGNAGRIvr8C_yND1yHK5QUE8TqfS_FiHF80Q',
  //         'client-id': 'bbk',
  //       },
  //     };
  //     try {
  //       const response = await axios(apiUrl, body);
  //       console.log(response.data?.content?.menu?.categories);

  //       let newData = response.data?.content?.menu?.categories;

  //       let sectionListTemplate = [];

  //       for (let i = 0; i < newData.length; i++) {
  //         const newObject = {
  //           title: newData[i].category_name,
  //           categoryImage: newData[i].category_image_url,

  //           data: newData[i].items,
  //         };
  //         sectionListTemplate.push(newObject);
  //       }

  //       setMenuList(sectionListTemplate);
  //     } catch (error) {
  //       if (axios.isCancel(error)) {
  //         console.log('Data fetching cancelled');
  //       } else {
  //         // Handle error
  //       }
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  useEffect(() => {
    const APIURL = 'https://dev.planify.in/research-report/147/eventsViewapi/';

    const fetchAPI = async () => {
      try {
        const response = await axios(APIURL);
        console.log('Response is =======', JSON.stringify(response.data));
        const mainResponse = JSON.parse(JSON.stringify(response.data));
        console.log(
          'MainResponse is',
          mainResponse.response.stock.dividends.data.pastDividends,
        );
        setMenuList(mainResponse.response.stock.dividends.data.pastDividends);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Data fetching cancelled');
        } else {
          // Handle error
        }
      }
    };
    fetchAPI();
  }, []);

  return menuList;
}
