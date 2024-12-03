<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="column of this.columnsName" :key="column.index">{{ column }}</th>
      </tr>
    </thead>
    <tbody class="table__body">
      <tr v-if="Object.keys(results).length === 0">
        <td>Нет данных</td>
      </tr>
      <tr v-for="(row, index) in results" :key="row.id">
        <td :data-label="columnsName[0]">
          <router-link :to="/user/ + row.id">{{ row.number }}</router-link>
        </td>
        <td :data-label="columnsName[1]">{{ row.created_at }}</td>
        <td :data-label="columnsName[2]">{{ row.premise?.address }}</td>
        <td :data-label="columnsName[3]">
          {{ row.applicant.first_name + ' ' + row.applicant.last_name }}
        </td>
        <td :data-label="columnsName[4]">{{ row.description }}</td>
        <td :data-label="columnsName[5]">{{ row.due_date }}</td>
        <td :data-label="columnsName[6]">{{ row.status.name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
.table {
  width: 100%;
  border-spacing: 0;
  font-family: inherit;
  border-collapse: collapse;

  & td {
    padding: 10px 20px;
  }

  & tr {
    border: 1px solid var(--color-white-04);
  }
  & th,
  td {
    & a {
      text-decoration: underline dotted;
    }
  }
  & thead th {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: var(--color-blue);
    color: var(--color-white);
    // text-align: left;
    font-weight: 700;
  }
}
@media screen and (max-width: 730px) {
  .table {
    border: 0;
    & thead {
      display: none;
    }
    & tr {
      margin-bottom: 10px;
      display: block;
      border-bottom: 2px solid #ddd;
    }

    & td {
      display: block;
      text-align: right;
      border-bottom: 1px dotted #ccc;
      border-right: 1px solid transparent;
      padding: 10px 20px;

      & td:last-child {
        border-bottom: 0;
      }

      &:before {
        content: attr(data-label);
        float: left;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      columnsName: ['№', 'Создана', 'Адрес', 'Заявитель', 'Описание', 'Срок', 'Статус'],
      results: [
        {
          id: '1451984c-ef46-4beb-acd8-bc3450df70c7',
          setting: 1,
          setting_name: 'МДО',
          number: 5292,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Осталось 15 дн',
            short_details: 'осталось 15 дн',
            is_red_details: false
          },
          category: null,
          viewed_by_me: false,
          premise: {
            id: '58154706-c96d-40e4-abf2-2b5693b0909f',
            title: '14A',
            kind: 'B',
            thoroughfare: {
              id: 'f6d1cd2c-7f55-41f7-b357-634d67bff732',
              name: 'Белинского',
              kind: 'S'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Белинского, 14A',
            cadaster_address: '',
            full_address: 'Екатеринбург, Белинского, 14A',
            short_address: 'Белинского, 14A',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: '777.00',
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24846,
            is_deleted: false
          },
          apartment: { id: 20169, number: '2', object_type: 'кв.', label: 'кв. 2' },
          applicant: {
            username: '998330685003@@',
            last_name: 'QQQQQ',
            first_name: 'Bahmad',
            email: '',
            patronymic_name: '---'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: 'bam bam bam',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-12-18T07:39:12.372000Z',
          created_at: '2024-12-02T07:40:01.090212Z',
          common_areas: null,
          updated_at: '2024-12-02T16:14:55.012328Z',
          attachments: [],
          status_log: {
            created_at: '2024-12-02T12:40:01.090212+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '0dbc35a0-07a5-4a50-a80e-0c14dcb1aef1',
          setting: 1,
          setting_name: 'МДО',
          number: 5291,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Осталось 17 час',
            short_details: 'осталось 17 час',
            is_red_details: false
          },
          category: null,
          viewed_by_me: true,
          premise: {
            id: 'ae97165a-3235-4926-acc3-aae5d1f0f3d7',
            title: '42',
            kind: 'H',
            thoroughfare: {
              id: '1b079c57-eb76-4d0d-9c98-320a82e16beb',
              name: 'Ленина',
              kind: 'S'
            },
            locality: {
              id: '591f3e74-079f-42ff-a155-f01c9dc363ae',
              name: 'Серов',
              kind: 'C',
              phone_code1: '34385',
              phone_code2: ''
            },
            address: 'Ленина, 42',
            cadaster_address: '',
            full_address: 'Серов, Ленина, 42',
            short_address: 'Ленина, 42',
            manage_organization: { id: 51893, name: 'УК "Обзвон"' },
            area: null,
            apartments_area: null,
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 73555,
            is_deleted: false
          },
          apartment: { id: 3022098, number: '2', object_type: 'кв.', label: 'кв. 2' },
          applicant: {
            username: '79123123123',
            last_name: 'Иванов',
            first_name: 'Иван',
            email: '',
            patronymic_name: 'Иванович'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: 'Какое-то описание',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-12-03T18:11:00Z',
          created_at: '2024-11-30T15:57:04.960510Z',
          common_areas: null,
          updated_at: '2024-12-01T12:10:57.766330Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-30T20:57:04.960510+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '07adfabe-ed1b-407d-800e-21b1f527ae31',
          setting: 1,
          setting_name: 'МДО',
          number: 5290,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Осталось 16 дн',
            short_details: 'осталось 16 дн',
            is_red_details: false
          },
          category: null,
          viewed_by_me: true,
          premise: {
            id: '58154706-c96d-40e4-abf2-2b5693b09091',
            title: '16Б',
            kind: 'B',
            thoroughfare: {
              id: 'f6d1cd2c-7f55-41f7-b357-634d67bff732',
              name: 'Белинского',
              kind: 'S'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Белинского, 16Б',
            cadaster_address: '',
            full_address: 'Екатеринбург, Белинского, 16Б',
            short_address: 'Белинского, 16Б',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: '670.00',
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24844,
            is_deleted: false
          },
          apartment: { id: 20296, number: '14', object_type: 'кв.', label: 'кв. 14' },
          applicant: {
            username: '777777777',
            last_name: 'Андрейович',
            first_name: 'Андрей',
            email: '',
            patronymic_name: 'Андреев'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: '2222',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-12-19T19:22:00Z',
          created_at: '2024-11-30T15:55:56.892892Z',
          common_areas: null,
          updated_at: '2024-12-01T14:23:15.426142Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-30T20:55:56.892892+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '9701ed35-c249-4dae-8e2a-e7acba4954cd',
          setting: 1,
          setting_name: 'МДО',
          number: 5289,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Осталось 22 дн',
            short_details: 'осталось 22 дн',
            is_red_details: false
          },
          category: null,
          viewed_by_me: true,
          premise: {
            id: '93fa0f2c-6ca3-4180-ba1c-ad86fa2f0350',
            title: '21',
            kind: 'H',
            thoroughfare: {
              id: '6fdd3a8a-b0e6-44b8-a0c6-9e39c65f632b',
              name: 'Карла Маркса',
              kind: 'S'
            },
            locality: {
              id: '591f3e74-079f-42ff-a155-f01c9dc363ae',
              name: 'Серов',
              kind: 'C',
              phone_code1: '34385',
              phone_code2: ''
            },
            address: 'Карла Маркса, 21',
            cadaster_address: '',
            full_address: 'Серов, Карла Маркса, 21',
            short_address: 'Карла Маркса, 21',
            manage_organization: { id: 4772, name: 'УК "Тестовая"' },
            area: null,
            apartments_area: null,
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 73579,
            is_deleted: false
          },
          apartment: { id: 3025399, number: '2', object_type: 'кв.', label: 'кв. 2' },
          applicant: {
            username: '79373937416',
            last_name: 'Пахмутов',
            first_name: 'Владимир',
            email: '',
            patronymic_name: 'Дмитриевич'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: 'Привет',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-12-25T19:57:00Z',
          created_at: '2024-11-30T15:54:14.369263Z',
          common_areas: null,
          updated_at: '2024-11-30T16:07:42.807599Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-30T20:54:14.369263+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '18f64428-39f8-45cf-ba3d-61f98aa75810',
          setting: 1,
          setting_name: 'МДО',
          number: 5288,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Просрочена на 6 дн',
            short_details: 'просрочена на 6 дн',
            is_red_details: true
          },
          category: null,
          viewed_by_me: false,
          premise: {
            id: '2b78533a-5e56-418b-b73f-0e8a0ce6cf78',
            title: '44',
            kind: 'H',
            thoroughfare: {
              id: '1b079c57-eb76-4d0d-9c98-320a82e16beb',
              name: 'Ленина',
              kind: 'S'
            },
            locality: {
              id: '591f3e74-079f-42ff-a155-f01c9dc363ae',
              name: 'Серов',
              kind: 'C',
              phone_code1: '34385',
              phone_code2: ''
            },
            address: 'Ленина, 44',
            cadaster_address: '',
            full_address: 'Серов, Ленина, 44',
            short_address: 'Ленина, 44',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: null,
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 73556,
            is_deleted: false
          },
          apartment: { id: 3022101, number: '2', object_type: 'кв.', label: 'кв. 2' },
          applicant: {
            username: '79373937416',
            last_name: 'Пахмутов',
            first_name: 'Владимир',
            email: '',
            patronymic_name: 'Дмитриевич'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: 'вапвапвапвап',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-11-26T20:56:00Z',
          created_at: '2024-11-30T15:53:17.724311Z',
          common_areas: null,
          updated_at: '2024-11-30T15:53:17.724325Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-30T20:53:17.724311+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: 'e202aea7-ebf3-445b-b81b-f14b35399159',
          setting: 1,
          setting_name: 'МДО',
          number: 5287,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Поступила 2 дн назад',
            short_details: 'поступила 2 дн назад',
            is_red_details: false
          },
          category: null,
          viewed_by_me: false,
          premise: {
            id: '58154706-c96d-40e4-abf2-2b5693b09092',
            title: '17/1',
            kind: 'B',
            thoroughfare: {
              id: 'f6d1cd2c-7f55-41f7-b357-634d67bff732',
              name: 'Белинского',
              kind: 'S'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Белинского, 17/1',
            cadaster_address: '',
            full_address: 'Екатеринбург, Белинского, 17/1',
            short_address: 'Белинского, 17/1',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: '154.00',
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24845,
            is_deleted: false
          },
          apartment: { id: 1263758, number: '5', object_type: 'кв.', label: 'кв. 5' },
          applicant: {
            username: '79373937416',
            last_name: 'Пахмутов',
            first_name: 'Владимир',
            email: '',
            patronymic_name: 'Дмитриевич'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: 'апвапварппаропо',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: null,
          created_at: '2024-11-30T15:50:27.459396Z',
          common_areas: null,
          updated_at: '2024-11-30T15:50:27.459419Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-30T20:50:27.459396+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '05fcbc2d-f621-44c2-b540-2dfb209edc04',
          setting: 1,
          setting_name: 'МДО',
          number: 5286,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Осталось 3 дн',
            short_details: 'осталось 3 дн',
            is_red_details: false
          },
          category: null,
          viewed_by_me: true,
          premise: {
            id: '76d79ecc-17f6-4f68-a6e2-6bb401392201',
            title: '4/2',
            kind: 'U',
            thoroughfare: {
              id: '6441e17d-e086-48f4-a5a6-0cc1a4a474b9',
              name: 'Ленина',
              kind: 'A'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Ленина, 4/2',
            cadaster_address: '',
            full_address: 'Екатеринбург, Ленина, 4/2',
            short_address: 'Ленина, 4/2',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: null,
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24836,
            is_deleted: false
          },
          apartment: { id: 19962, number: '21', object_type: 'кв.', label: 'кв. 21' },
          applicant: {
            username: '88888888',
            last_name: 'test',
            first_name: 'test',
            email: '',
            patronymic_name: 'test'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: '12312312123',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-12-06T19:16:00Z',
          created_at: '2024-11-29T07:41:14.061122Z',
          common_areas: null,
          updated_at: '2024-12-01T14:17:01.977485Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-29T12:41:14.061122+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '4b92f5a6-0a74-4d1f-aa1b-9350b7710aba',
          setting: 1,
          setting_name: 'МДО',
          number: 5285,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Осталось 26 дн',
            short_details: 'осталось 26 дн',
            is_red_details: false
          },
          category: null,
          viewed_by_me: true,
          premise: {
            id: '41d7e49e-4fa7-4369-88c0-a99079f2a134',
            title: '3/1',
            kind: 'H',
            thoroughfare: {
              id: '2f4e63a3-4a61-45e4-bf8e-9e21a61d2560',
              name: 'Войкова',
              kind: 'S'
            },
            locality: {
              id: '0c5b2444-70a0-4932-980c-b4dc0d3f02b5',
              name: 'Москва',
              kind: 'C',
              phone_code1: '495',
              phone_code2: '499'
            },
            address: 'Войкова, 3/1',
            cadaster_address: '',
            full_address: 'Москва, Войкова, 3/1',
            short_address: 'Войкова, 3/1',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: null,
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24828,
            is_deleted: false
          },
          apartment: { id: 702658, number: '7', object_type: 'кв.', label: 'кв. 7' },
          applicant: {
            username: '',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: ''
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: '',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-12-29T07:39:25.353000Z',
          created_at: '2024-11-29T07:39:27.660173Z',
          common_areas: null,
          updated_at: '2024-11-29T07:39:27.660186Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-29T12:39:27.660173+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '0d96a980-6b42-4f81-8916-15651b51a600',
          setting: 1,
          setting_name: 'МДО',
          number: 5284,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Просрочена на 2 дн',
            short_details: 'просрочена на 2 дн',
            is_red_details: true
          },
          category: null,
          viewed_by_me: true,
          premise: null,
          apartment: null,
          applicant: {
            username: '',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: ''
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: '',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-11-30T07:38:13.572000Z',
          created_at: '2024-11-29T07:38:17.697289Z',
          common_areas: null,
          updated_at: '2024-11-29T07:38:17.697303Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-29T12:38:17.697289+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '85c4e7f5-bae2-4624-b207-a5fcdfe43be6',
          setting: 1,
          setting_name: 'МДО',
          number: 5283,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Просрочена на 4 дн',
            short_details: 'просрочена на 4 дн',
            is_red_details: true
          },
          category: null,
          viewed_by_me: true,
          premise: {
            id: '58154706-c96d-40e4-abf2-2b5693b0909f',
            title: '14A',
            kind: 'B',
            thoroughfare: {
              id: 'f6d1cd2c-7f55-41f7-b357-634d67bff732',
              name: 'Белинского',
              kind: 'S'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Белинского, 14A',
            cadaster_address: '',
            full_address: 'Екатеринбург, Белинского, 14A',
            short_address: 'Белинского, 14A',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: '777.00',
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24846,
            is_deleted: false
          },
          apartment: { id: 20168, number: '1', object_type: 'кв.', label: 'кв. 1' },
          applicant: {
            username: '79122333444',
            last_name: '222',
            first_name: '222',
            email: '',
            patronymic_name: '222'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description:
            '222фыафыв фывфыв фывфыв фывфывфыв фывфывфыв фывфывфыв фывфывфыв фывфывфыв фывфывфывыф фывфывфывфыв вфывфывфывфы',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-11-28T05:00:00Z',
          created_at: '2024-11-28T17:56:57.044343Z',
          common_areas: null,
          updated_at: '2024-11-28T17:59:40.480980Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-28T22:56:57.044343+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '636429c1-e432-44b3-8af0-b1d563e88302',
          setting: 1,
          setting_name: 'МДО',
          number: 5282,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Просрочена на 4 дн',
            short_details: 'просрочена на 4 дн',
            is_red_details: true
          },
          category: null,
          viewed_by_me: true,
          premise: {
            id: '58154706-c96d-40e4-abf2-2b5693b0909f',
            title: '14A',
            kind: 'B',
            thoroughfare: {
              id: 'f6d1cd2c-7f55-41f7-b357-634d67bff732',
              name: 'Белинского',
              kind: 'S'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Белинского, 14A',
            cadaster_address: '',
            full_address: 'Екатеринбург, Белинского, 14A',
            short_address: 'Белинского, 14A',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: '777.00',
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24846,
            is_deleted: false
          },
          apartment: { id: 20168, number: '1', object_type: 'кв.', label: 'кв. 1' },
          applicant: {
            username: '79122333444',
            last_name: 'asd',
            first_name: 'asd',
            email: '',
            patronymic_name: 'asd'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: '222',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-11-28T18:40:00Z',
          created_at: '2024-11-28T11:40:24.249679Z',
          common_areas: null,
          updated_at: '2024-11-28T11:40:24.249693Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-28T16:40:24.249679+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '4a6eb195-aeba-42ec-8180-990002cee344',
          setting: 1,
          setting_name: 'МДО',
          number: 5281,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Просрочена на 3 дн',
            short_details: 'просрочена на 3 дн',
            is_red_details: true
          },
          category: null,
          viewed_by_me: true,
          premise: {
            id: '58154706-c96d-40e4-abf2-2b5693b0909f',
            title: '14A',
            kind: 'B',
            thoroughfare: {
              id: 'f6d1cd2c-7f55-41f7-b357-634d67bff732',
              name: 'Белинского',
              kind: 'S'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Белинского, 14A',
            cadaster_address: '',
            full_address: 'Екатеринбург, Белинского, 14A',
            short_address: 'Белинского, 14A',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: '777.00',
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24846,
            is_deleted: false
          },
          apartment: { id: 20169, number: '2', object_type: 'кв.', label: 'кв. 2' },
          applicant: {
            username: '79122333444',
            last_name: 'asd',
            first_name: 'asd',
            email: '',
            patronymic_name: 'asd'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: '111',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-11-29T02:00:00Z',
          created_at: '2024-11-28T11:25:13.975901Z',
          common_areas: null,
          updated_at: '2024-11-28T11:29:38.375784Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-28T16:25:13.975901+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '5763ba68-95bb-4861-ac44-7ad28578f379',
          setting: 1,
          setting_name: 'МДО',
          number: 5280,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Просрочена на 4 дн',
            short_details: 'просрочена на 4 дн',
            is_red_details: true
          },
          category: null,
          viewed_by_me: true,
          premise: {
            id: '58154706-c96d-40e4-abf2-2b5693b0909f',
            title: '14A',
            kind: 'B',
            thoroughfare: {
              id: 'f6d1cd2c-7f55-41f7-b357-634d67bff732',
              name: 'Белинского',
              kind: 'S'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Белинского, 14A',
            cadaster_address: '',
            full_address: 'Екатеринбург, Белинского, 14A',
            short_address: 'Белинского, 14A',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: '777.00',
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24846,
            is_deleted: false
          },
          apartment: { id: 20168, number: '1', object_type: 'кв.', label: 'кв. 1' },
          applicant: {
            username: '79122333444',
            last_name: 'ыыы',
            first_name: 'ыыы',
            email: '',
            patronymic_name: 'ыыы'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: '111',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-11-28T23:00:00Z',
          created_at: '2024-11-28T09:44:28.095785Z',
          common_areas: null,
          updated_at: '2024-11-28T10:03:44.898990Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-28T14:44:28.095785+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '61301371-51bf-4386-84fa-414ab4eb1fc0',
          setting: 1,
          setting_name: 'МДО',
          number: 5279,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Просрочена на 2 дн',
            short_details: 'просрочена на 2 дн',
            is_red_details: true
          },
          category: null,
          viewed_by_me: true,
          premise: {
            id: '58154706-c96d-40e4-abf2-2b5693b0909f',
            title: '14A',
            kind: 'B',
            thoroughfare: {
              id: 'f6d1cd2c-7f55-41f7-b357-634d67bff732',
              name: 'Белинского',
              kind: 'S'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Белинского, 14A',
            cadaster_address: '',
            full_address: 'Екатеринбург, Белинского, 14A',
            short_address: 'Белинского, 14A',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: '777.00',
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24846,
            is_deleted: false
          },
          apartment: { id: 20168, number: '1', object_type: 'кв.', label: 'кв. 1' },
          applicant: {
            username: '79122333444',
            last_name: 'sss',
            first_name: 'sss',
            email: '',
            patronymic_name: 'sss'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: 'sss',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-11-30T02:00:00Z',
          created_at: '2024-11-28T09:41:16.551606Z',
          common_areas: null,
          updated_at: '2024-11-28T09:41:16.551620Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-28T14:41:16.551606+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '75c622fa-9a3e-4948-80bb-735283ed5a88',
          setting: 1,
          setting_name: 'МДО',
          number: 5278,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Просрочена на 2 дн',
            short_details: 'просрочена на 2 дн',
            is_red_details: true
          },
          category: null,
          viewed_by_me: true,
          premise: {
            id: '58154706-c96d-40e4-abf2-2b5693b0909f',
            title: '14A',
            kind: 'B',
            thoroughfare: {
              id: 'f6d1cd2c-7f55-41f7-b357-634d67bff732',
              name: 'Белинского',
              kind: 'S'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Белинского, 14A',
            cadaster_address: '',
            full_address: 'Екатеринбург, Белинского, 14A',
            short_address: 'Белинского, 14A',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: '777.00',
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24846,
            is_deleted: false
          },
          apartment: { id: 20168, number: '1', object_type: 'кв.', label: 'кв. 1' },
          applicant: {
            username: '79122333444',
            last_name: 'sss',
            first_name: 'sss',
            email: '',
            patronymic_name: 'sss'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: 'sss',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-11-30T02:00:00Z',
          created_at: '2024-11-28T09:41:11.969604Z',
          common_areas: null,
          updated_at: '2024-11-28T09:41:11.969618Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-28T14:41:11.969604+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '3a770300-6585-44e4-bfd1-2754dd8709e6',
          setting: 1,
          setting_name: 'МДО',
          number: 5277,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Просрочена на 2 дн',
            short_details: 'просрочена на 2 дн',
            is_red_details: true
          },
          category: null,
          viewed_by_me: true,
          premise: null,
          apartment: { id: 20168, number: '1', object_type: 'кв.', label: 'кв. 1' },
          applicant: {
            username: '79122333444',
            last_name: 'ффф',
            first_name: 'ффф',
            email: '',
            patronymic_name: 'ффф'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: 'ффф',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-11-30T04:00:00Z',
          created_at: '2024-11-28T09:30:05.000743Z',
          common_areas: null,
          updated_at: '2024-11-28T09:30:05.000757Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-28T14:30:05.000743+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '15f82bb0-92f3-4eac-bbc9-d36d20c766ac',
          setting: 1,
          setting_name: 'МДО',
          number: 5276,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Просрочена на 21 дн',
            short_details: 'просрочена на 21 дн',
            is_red_details: true
          },
          category: null,
          viewed_by_me: true,
          premise: {
            id: '58154706-c96d-40e4-abf2-2b5693b0909f',
            title: '14A',
            kind: 'B',
            thoroughfare: {
              id: 'f6d1cd2c-7f55-41f7-b357-634d67bff732',
              name: 'Белинского',
              kind: 'S'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Белинского, 14A',
            cadaster_address: '',
            full_address: 'Екатеринбург, Белинского, 14A',
            short_address: 'Белинского, 14A',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: '777.00',
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24846,
            is_deleted: false
          },
          apartment: { id: 20169, number: '2', object_type: 'кв.', label: 'кв. 2' },
          applicant: {
            username: '3',
            last_name: '3',
            first_name: '3',
            email: '',
            patronymic_name: '3'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: '3',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-11-12T00:30:00Z',
          created_at: '2024-11-27T21:30:23.750566Z',
          common_areas: null,
          updated_at: '2024-11-28T08:47:47.459595Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-28T02:30:23.750566+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: 'd98dee70-ce38-4376-80c0-c7fe2ea3f753',
          setting: 1,
          setting_name: 'МДО',
          number: 5275,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Просрочена на 4 дн',
            short_details: 'просрочена на 4 дн',
            is_red_details: true
          },
          category: null,
          viewed_by_me: true,
          premise: {
            id: '58154706-c96d-40e4-abf2-2b5693b09091',
            title: '16Б',
            kind: 'B',
            thoroughfare: {
              id: 'f6d1cd2c-7f55-41f7-b357-634d67bff732',
              name: 'Белинского',
              kind: 'S'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Белинского, 16Б',
            cadaster_address: '',
            full_address: 'Екатеринбург, Белинского, 16Б',
            short_address: 'Белинского, 16Б',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: '670.00',
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24844,
            is_deleted: false
          },
          apartment: { id: 20284, number: '2', object_type: 'кв.', label: 'кв. 2' },
          applicant: {
            username: '2',
            last_name: '2',
            first_name: '2',
            email: '',
            patronymic_name: '2'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: '2',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-11-29T00:24:00Z',
          created_at: '2024-11-27T21:25:02.187935Z',
          common_areas: null,
          updated_at: '2024-11-27T21:25:02.187949Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-28T02:25:02.187935+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '636899a3-4a2a-4bf3-9b19-4636172963cc',
          setting: 1,
          setting_name: 'МДО',
          number: 5274,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Просрочена на 4 дн',
            short_details: 'просрочена на 4 дн',
            is_red_details: true
          },
          category: null,
          viewed_by_me: false,
          premise: {
            id: '58154706-c96d-40e4-abf2-2b5693b09091',
            title: '16Б',
            kind: 'B',
            thoroughfare: {
              id: 'f6d1cd2c-7f55-41f7-b357-634d67bff732',
              name: 'Белинского',
              kind: 'S'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Белинского, 16Б',
            cadaster_address: '',
            full_address: 'Екатеринбург, Белинского, 16Б',
            short_address: 'Белинского, 16Б',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: '670.00',
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24844,
            is_deleted: false
          },
          apartment: { id: 20284, number: '2', object_type: 'кв.', label: 'кв. 2' },
          applicant: {
            username: '2',
            last_name: '2',
            first_name: '2',
            email: '',
            patronymic_name: '2'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: '2',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-11-29T00:24:00Z',
          created_at: '2024-11-27T21:25:02.023908Z',
          common_areas: null,
          updated_at: '2024-11-27T21:25:02.023935Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-28T02:25:02.023908+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        },
        {
          id: '26ed1c3a-8901-431d-aafb-c04a76f293d7',
          setting: 1,
          setting_name: 'МДО',
          number: 5273,
          status: {
            id: 1,
            name: 'Новая',
            full_details: 'Просрочена на 4 дн',
            short_details: 'просрочена на 4 дн',
            is_red_details: true
          },
          category: null,
          viewed_by_me: false,
          premise: {
            id: '58154706-c96d-40e4-abf2-2b5693b09091',
            title: '16Б',
            kind: 'B',
            thoroughfare: {
              id: 'f6d1cd2c-7f55-41f7-b357-634d67bff732',
              name: 'Белинского',
              kind: 'S'
            },
            locality: {
              id: '2763c110-cb8b-416a-9dac-ad28a55b4402',
              name: 'Екатеринбург',
              kind: 'C',
              phone_code1: '343',
              phone_code2: null
            },
            address: 'Белинского, 16Б',
            cadaster_address: '',
            full_address: 'Екатеринбург, Белинского, 16Б',
            short_address: 'Белинского, 16Б',
            manage_organization: { id: 1, name: 'УК "Мой Дом Онлайн"' },
            area: null,
            apartments_area: '670.00',
            apartments_count: null,
            cadaster_numbers: [],
            customer_premise_id: 24844,
            is_deleted: false
          },
          apartment: { id: 20284, number: '2', object_type: 'кв.', label: 'кв. 2' },
          applicant: {
            username: '2',
            last_name: '2',
            first_name: '2',
            email: '',
            patronymic_name: '2'
          },
          performer: null,
          performers: [],
          priority: null,
          rating: null,
          description: '2',
          created_by: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          created_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          updated_by_employee: {
            id: 81629,
            employee_id: 8275,
            username: '79122333444',
            last_name: '',
            first_name: '',
            email: '',
            patronymic_name: '',
            position: '',
            full_name_position: ''
          },
          start_at: null,
          due_date: '2024-11-29T00:24:00Z',
          created_at: '2024-11-27T21:25:01.852516Z',
          common_areas: null,
          updated_at: '2024-11-27T21:25:01.852540Z',
          attachments: [],
          status_log: {
            created_at: '2024-11-28T02:25:01.852516+05:00',
            assigned_at: null,
            delayed_at: null,
            executed_at: null,
            rated_at: null,
            completed_at: null,
            refused_at: null,
            rejected_at: null,
            transferred_at: null,
            viewed_at: null
          },
          not_viewed_appeal_changes: false
        }
      ]
    }
  }
}
</script>
