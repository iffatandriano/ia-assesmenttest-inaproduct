import React, { Dispatch, SetStateAction } from 'react';
import { Modal, Form, Input, notification, Button } from 'antd';
import { useMutation, useQueryClient } from 'react-query';
import { createNewPost } from 'services';

interface ModalAddPostProps {
  userId: any;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const { TextArea } = Input;

const ModalAddPost: React.FC<ModalAddPostProps> = (props) => {
  const { userId, openModal, setOpenModal } = props;
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(createNewPost, {
    onSuccess: (response) => {
      notification['success']({
        message: 'You have been success to add new post',
      });
      queryClient.setQueryData('post', response.data);
    },
    onSettled: (error) => {
      queryClient.invalidateQueries('post');
      if (error) {
        setOpenModal(false);
      }
    },
    onError: (err) => {
      notification['error']({
        message: `${err}`,
        description: 'Unable to add new post, please try again!',
      });
    },
  });

  const onFinish = (values: any) => {
    const postParams = {
      title: values.title,
      body: values.body,
      userId: userId,
    };

    mutate(postParams);
  };

  return (
    <Modal
      title="Add New Post"
      visible={openModal}
      onCancel={() => setOpenModal(false)}
      okText="Add"
      footer={[
        <Button
          key="add"
          type="primary"
          loading={isLoading}
          onClick={() => {
            form.submit();
          }}
        >
          Add New Post
        </Button>,
      ]}
    >
      <Form
        name="add_new_post"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input your title' }]}
        >
          <Input placeholder="title post" />
        </Form.Item>
        <Form.Item name="body" label="Body">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalAddPost;
